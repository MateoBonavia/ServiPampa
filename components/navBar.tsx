import Link from 'next/link';
import Login from '../assets/svg/Login/right-to-bracket-solid.svg';
import Image from 'next/image';

export default function NavBar() {
  return (
    <div className="grid grid-cols-5 gap-3 bg-linear-to-r from-[#000026] to-[#00001C] h-12 md:grid-cols-4 md:pl-8 md:pr-8 md:h-16 lg:grid-cols-2 lg:pl-24 lg:pr-24">
      <div className="text-xs col-span-4 text-white flex justify-between items-center pl-1 md:col-span-2 md:text-sm lg:col-span-1 lg:text-lg">
        <Link href="/">Inicio</Link>
        <Link href="/historia">Historia</Link>
        <Link href="/novedades">Novedades</Link>
        <Link href="/servicios">Servicios</Link>
        <Link href="/contacto">Contacto</Link>
      </div>
      {/* flex gap-2 justify-end items-center pr-1 md:col-span-2 lg:col-span-1 */}
      <div className="hidden">
        <p className="hidden md:flex md:text-white md:text-sm lg:text-lg">
          Ingreso Clientes
        </p>
        <Image src={Login} alt="Login" width={20} />
      </div>
    </div>
  );
}
