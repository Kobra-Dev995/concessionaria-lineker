import Header from '../components/Header';

export const metadata = {
  title: 'Carro Para a Venda',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }) {
  return (
    <html lang='pt-br'>
      
      <body>{children}</body>
    </html>
  );
}
