export default function NavLink({ title, linkTo }) {
  return (
    <a href={linkTo} className="text-sm font-semibold leading-6">
      {title}
    </a>
  );
}
