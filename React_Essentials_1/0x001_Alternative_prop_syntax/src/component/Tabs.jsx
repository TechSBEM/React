export default function Tabs({ children, buttons, ButtonsContainer='menu' }) {
    // Setting component type dynamically
  return (
    <>
      <ButtonsContainer>{buttons}</ButtonsContainer>
      {children}
    </>
  );
}
