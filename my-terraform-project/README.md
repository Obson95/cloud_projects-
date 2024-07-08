# Azure Terraform Project

## Overview

This project uses Terraform to automate the deployment of cloud infrastructure on Azure. It sets up a resource group and can be expanded to include other Azure resources.

## Project Structure

- `main.tf`: Contains the main Terraform configuration.
- `variables.tf`: Defines variables used in the configuration.
- `outputs.tf`: Specifies the outputs from the Terraform configuration.

## Getting Started

### Prerequisites

- [Terraform](https://learn.hashicorp.com/tutorials/terraform/install-cli) installed.
- [Azure CLI](https://docs.microsoft.com/en-us/cli/azure/install-azure-cli) installed.
- An [Azure account](https://azure.microsoft.com/free/) with appropriate permissions.

### Setup

1. **Clone the Repository:**

   ```sh
   git clone <repository-url>
   cd <repository-directory>


2. **Command used during the process:**

   # Initialize Terraform
    terraform plan   

   # Plan the Deployment
    terraform plan

   # Apply the Configuration
    terraform apply



