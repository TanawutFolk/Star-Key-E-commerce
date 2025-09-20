import React from "react";
import Container from "../components/layout/Container";
import { Card, CardBody } from "../components/ui/Card";
import { User } from "lucide-react";

export default function Profile() {
  return (
    <main className="py-10">
      <Container>
        <div className="mb-6 flex items-center gap-3">
          <div className="grid h-12 w-12 place-items-center rounded-2xl bg-zinc-900 text-white">
            <User className="h-6 w-6" />
          </div>
          <div>
            <h1 className="text-2xl font-black">โปรไฟล์ของฉัน</h1>
            <p className="text-sm text-zinc-600">john.doe@example.com</p>
          </div>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          <Card>
            <CardBody>
              <div className="mb-3 font-semibold">ข้อมูลส่วนตัว</div>
              <div className="space-y-2 text-sm text-zinc-600">
                <div>ชื่อผู้ใช้: JohnDoe</div>
                <div>อีเมล: john.doe@example.com</div>
              </div>
            </CardBody>
          </Card>
          <Card>
            <CardBody>
              <div className="mb-3 font-semibold">ความปลอดภัย</div>
              <button className="rounded-xl border border-zinc-300 px-3 py-2 text-sm">
                เปลี่ยนรหัสผ่าน
              </button>
            </CardBody>
          </Card>
          <Card>
            <CardBody>
              <div className="mb-3 font-semibold">การแจ้งเตือน</div>
              <label className="flex items-center gap-3 text-sm text-zinc-600">
                <input type="checkbox" defaultChecked /> อีเมลโปรโมชัน
              </label>
            </CardBody>
          </Card>
        </div>
      </Container>
    </main>
  );
}
