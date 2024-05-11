import "./../styles/header.css";
function Header() {
  return (
    <div class="header">
      <span class="name">
        {/* <a href="https://www.amlanpatra.work">Amlan Patra</a> */}
        <a href="index.html">Amlan Patra</a>
      </span>
      <ul class="head_list">
        <li class="underline">
          <a href="index.html">Home</a>
        </li>
        <li class="underline">
          <a
            href="https://www.leetcode.com/amlanpatra16"
            target="_blank"
            rel="noopener noreferer"
          >
            Leetcode
          </a>
        </li>
        <li class="underline">
          <a
            href="https://www.github.com/amlanpatra"
            target="_blank"
            rel="noreferer"
          >
            Github
          </a>
        </li>
        <li class="underline">About</li>
        <li class="underline">Contact</li>
      </ul>
    </div>
  );
}

export default Header;
