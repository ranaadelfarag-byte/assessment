interface ListItemProps {
  children: React.ReactNode;
}

export function ListItem({ children }: ListItemProps) {
  return (
    <div className="p-4 border mx-20 my-8 rounded-lg bg-white shadow-sm">
      {children}
    </div>
  );
}