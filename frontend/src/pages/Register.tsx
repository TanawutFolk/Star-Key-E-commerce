import React from "react";
import { Card, CardBody } from "../components/ui/Card";
import { Link } from "react-router-dom";
import Input from "../components/ui/input";
import Button from "../components/ui/Button";

export default function Register() {
  return (
    <main className="grid min-h-[60vh] place-items-center px-4 py-12">
      <Card className="w-full max-w-md">
        <CardBody>
          <div className="mb-6 text-center">
            <h1 className="text-2xl font-black">สมัครสมาชิก</h1>
            <p className="text-sm text-zinc-600">
              สร้างบัญชีใหม่เพื่อเริ่มช้อป
            </p>
          </div>
          <div className="space-y-3">
            <Input placeholder="ชื่อผู้ใช้" />
            <Input placeholder="อีเมล" type="email" />
            <Input placeholder="รหัสผ่าน" type="password" />
            <Button variant="primary" className="w-full">
              สร้างบัญชี
            </Button>
          </div>
          <div className="mt-4 text-center text-sm text-zinc-600">
            มีบัญชีอยู่แล้ว?{" "}
            <Link to="/login" className="font-semibold text-zinc-900 underline">
              เข้าสู่ระบบ
            </Link>
          </div>
        </CardBody>
      </Card>
    </main>
  );
}
