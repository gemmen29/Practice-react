import Link from 'next/link';
export default function NewsPage() {
  return (
    <ul>
      <li>
        <Link href="/news/1">Item 1</Link>
      </li>
      <li>
        <Link href="/news/2">Item 2</Link>
      </li>
    </ul>
  );
}
