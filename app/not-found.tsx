import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button, Container } from "@/components/ui";

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Container className="py-32 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-brand">404</p>
          <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-ink">Page not found</h1>
          <p className="mt-4 text-ink-muted">The page you are looking for does not exist or has moved.</p>
          <Button href="/" className="mt-8">Back to home</Button>
        </Container>
      </main>
      <Footer />
    </>
  );
}
