export const CustomBlockquote = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <blockquote className="mt-6 border-l-2 border-violet-300 dark:border-emerald-900 w-full pl-4 not-italic">
      {children}
    </blockquote>
  );
};
