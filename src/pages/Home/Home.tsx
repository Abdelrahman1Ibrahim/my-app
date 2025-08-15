import MainLayout from "../../layouts/MainLayout";

export default function Home() {
  return (
    <MainLayout>
      <div style={{ textAlign: "center", padding: "2rem" }}>
        <h1>مرحباً بك في Task Manager</h1>
        <p>هذه الصفحة الرئيسية للتطبيق</p>
        <p>يمكنك استخدام القائمة الجانبية للتنقل بين الصفحات</p>
      </div>
    </MainLayout>
  );
}
