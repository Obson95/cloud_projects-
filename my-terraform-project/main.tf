# Specify the provider
provider "azurerm" {
  features {}
}

# Define a resource group
resource "azurerm_resource_group" "IaC_practice" {
  name     = "terr-resources"
  location = "East US"
}
