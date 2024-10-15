export default function SidebarLink({ title, linkTo }) {
  return (
    <a
      href={linkTo}
      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
    >
      {title}
    </a>
  );
}
