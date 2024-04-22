function NotFound({ message = "Not Found" }: { message: string }) {
  return (
    <div
      data-testid="not-found"
      className="flex items-center justify-center h-screen">
      <p className="text-3xl text-red-500">{message}</p>
    </div>
  );
}

export default NotFound;
