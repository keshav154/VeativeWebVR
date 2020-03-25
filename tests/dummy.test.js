describe("Calculator Spec", function() {
  it("should add two and two and get four as a result", function() {
    // Arrange
    var calculator = new Calculator();

    // Act
    var resultAdd = calculator.add(2, 2);
    var resultSubtract = calculator.subtract(5, 2);

    // Assert
    expect(resultAdd).toBe(4);
    expect(resultSubtract).toBe(3);
  });
});
