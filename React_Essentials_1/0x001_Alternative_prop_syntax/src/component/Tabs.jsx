export default function Tabs({ children, buttons, ButtonsContainer }) {
    // can use "buttonContainers" with a samll letter initiable
    // when that is done, react will think of it a bbbbbbbbbbbbbbbbbb                                                                                                                                                                                                                   bbbb                                                                                                                                                                                                                                                                                                                                                       bbbbb
  return (
    <>
      <menu>{buttons}</menu>
      {children}
    </>
  );
}
