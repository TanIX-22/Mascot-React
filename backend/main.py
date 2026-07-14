from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from supabase import create_client, Client
import os
from dotenv import load_dotenv

load_dotenv()

app = FastAPI(title="Mascot Management API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Test route
@app.get("/")
async def root():
    return {"message": "Mascot Management API is running! ✅"}

# Initialize Supabase
supabase_url = os.getenv("SUPABASE_URL")
supabase_key = os.getenv("SUPABASE_KEY")

if not supabase_url or not supabase_key:
    raise RuntimeError("Missing SUPABASE_URL or SUPABASE_KEY in backend/.env")

# Create Supabase client
supabase: Client = create_client(supabase_url, supabase_key)

class LoginRequest(BaseModel):
    user_id: str
    password: str

@app.post("/login")
async def login(request: LoginRequest):
    try:
        if not request.user_id.startswith("Mascot@"):
            raise HTTPException(400, "Invalid User ID format. Use Mascot@EMP_CODE")

        emp_code = request.user_id.split("@")[1]

        response = supabase.table("employee_professional_info").select("*").eq("emp_code", emp_code).execute()

        if not response.data:
            raise HTTPException(401, "Invalid credentials")

        employee = response.data[0]

        if request.password.strip().lower() != employee.get("employee_name", "").strip().lower():
            raise HTTPException(401, "Invalid credentials")

        personal = supabase.table("employee_personal_info").select("*").eq("emp_code", emp_code).execute()
        docs = supabase.table("employee_documents").select("*").eq("emp_code", emp_code).execute()

        return {
            "success": True,
            "employee": employee,
            "personal": personal.data[0] if personal.data else {},
            "documents": docs.data[0] if docs.data else {}
        }
    except HTTPException:
        raise
    except Exception as e:
        print(f"Error: {str(e)}")
        raise HTTPException(status_code=500, detail=f"Server error: {str(e)}")

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)