import Programs from "@/components/Programs";

export const metadata = {
  title: "Program Belajar",
  description: "Pilihan program belajar KodingNext",
};

export default function ProgramPage() {
  return (
    <main className="bg-white pt-12">
      <Programs />
    </main>
  );
}
