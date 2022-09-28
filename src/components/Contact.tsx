interface ContactProps {
  email: string;
  phone: string;
}

export default function Contact({email, phone}: ContactProps) {
  return (
    <h5
      className="mr-2 self-center fixed right-0 text-emerald-900 dark:text-neutral-200"
      style={{ writingMode: "vertical-rl" }}>
      {email} | {phone}
    </h5>
  );
};
