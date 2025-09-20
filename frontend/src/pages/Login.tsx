import React from "react";
import { Card, CardBody } from "../components/ui/Card";
import { Link } from "react-router-dom";
import Input from "../components/ui/input";
import Button from "../components/ui/Button";

export default function Login() {
  return (
    <main className="grid min-h-[60vh] place-items-center px-4 py-12">
      <Card className="w-full max-w-md">
        <CardBody>
          <div className="mb-6 text-center">
            <h1 className="text-2xl font-black">เข้าสู่ระบบ</h1>
            <p className="text-sm text-zinc-600">ยินดีต้อนรับกลับสู่ Starkey</p>
          </div>
          <div className="space-y-3">
            <Input placeholder="อีเมล" type="email" />
            <Input placeholder="รหัสผ่าน" type="password" />
            <Button variant="primary" className="w-full">
              เข้าสู่ระบบ
            </Button>
          </div>
          <div className="mt-4 text-center text-sm text-zinc-600">
            ยังไม่มีบัญชี?{" "}
            <Link
              to="/register"
              className="font-semibold text-zinc-900 underline"
            >
              สมัครสมาชิก
            </Link>
          </div>
        </CardBody>
      </Card>
    </main>
  );
}
