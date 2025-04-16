package main

import (
	"log"

	"github.com/go-playground/validator/v10"
)

var Validate *validator.Validate

const (
	DiscountTypeFIXED      string = "FIXED"
	DiscountTypePercentage string = "PERCENTAGE"
)

func main() {
	// Initialize the validator
	InitializeValidator()

	// Example struct to validate
	example := struct {
		DiscountType string `validate:"required,enum-validation"`
	}{
		DiscountType: "FIXED",
	}

	// Perform validation
	if err := Validate.Struct(example); err != nil {
		log.Println("Validation failed:", err)
	} else {
		log.Println("Validation passed")
	}
}

// InitializeValidator sets up custom validations
func InitializeValidator() {
	// Create a new validator instance
	Validate = validator.New()

	// Register the custom enum validation
	if err := Validate.RegisterValidation("enum-validation", DiscountTypeValidation); err != nil {
		log.Printf("Error registering enum-validation: %v", err)
		panic("could not register enum-validation")
	} else {
		log.Print("enum-validation registered successfully")
	}
}

// DiscountTypeValidation checks if the value is one of the allowed types
func DiscountTypeValidation(fl validator.FieldLevel) bool {
	discountType, ok := fl.Field().Interface().(string)
	if !ok {
		return false
	}
	return discountType == DiscountTypeFIXED || discountType == DiscountTypePercentage
}
