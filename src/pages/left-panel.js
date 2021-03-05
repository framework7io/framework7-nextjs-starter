import { Page, Navbar, Link, Block } from "framework7-react";

export default function About() {
  return (
    <Page>
      <Navbar title="Left Panel" />

      <Block strong>
        <p>
          This is a left side panel. You can close it by clicking outside or on
          this link: <Link panelClose>close me</Link>.
        </p>
      </Block>
    </Page>
  );
}
