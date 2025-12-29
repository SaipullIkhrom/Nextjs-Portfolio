import CardNav from "@/components/reactbits/CardNav";
import "./globals.css";


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-black antialiased">
        <CardNav 
          logo="/logo.svg"
          items={[
            { 
              label: "Home & About", 
              bgColor: "#000000", 
              textColor: "#3b82f6", 
              links: [
                { label: "Home", href: "/", ariaLabel: "Go to home" },
                { label: "About Me", href: "#about", ariaLabel: "Learn more about me" }
              ] 
            },
            { 
              label: "Network", 
              bgColor: "#1e3a8a", 
              textColor: "#ffffff", 
              links: [
                { label: "Clients", href: "#clients", ariaLabel: "View my clients" },
                { label: "Blog", href: "#blog", ariaLabel: "Read my articles" }
              ] 
            },
            { 
              label: "Work", 
              bgColor: "#3b82f6", 
              textColor: "#ffffff", 
              links: [
                { label: "Projects", href: "#projects", ariaLabel: "See my work" },
                { label: "Contact", href: "#contact", ariaLabel: "Get in touch" }
              ] 
            }
          ]}
        />
        {children}
      </body>
    </html>
  );
}