import React from "react";
import Container from "../components/layout/Container";
import { Card, CardBody } from "../components/ui/Card";
import { Settings } from "lucide-react";

export default function SettingsPage() {
  return (
    <main className="py-10">
      <Container>
        <div className="mb-6 flex items-center gap-3">
          <Settings className="h-6 w-6" />
          <h1 className="text-2xl font-black">การตั้งค่า</h1>
        </div>
        <Card>
          <CardBody className="space-y-3">
            <label className="flex items-center justify-between">
              <span>ธีมมืด</span>
              <input type="checkbox" className="h-4 w-4" />
            </label>
            <label className="flex items-center justify-between">
              <span>ภาษา</span>
              <select className="rounded-lg border border-zinc-300 bg-white px-3 py-2 text-sm">
                <option>ไทย</option>
                <option>English</option>
              </select>
            </label>
          </CardBody>
        </Card>
      </Container>
    </main>
  );
}
