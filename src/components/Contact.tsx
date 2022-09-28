interface ContactProps {
  email: string;
}

export default function Contact({email}: ContactProps) {
  return (
    <h5
      className="mr-2 self-center fixed right-0 text-emerald-900 dark:text-neutral-200"
      style={{ writingMode: "vertical-rl" }}>
        {email}
    </h5>
  );
};
