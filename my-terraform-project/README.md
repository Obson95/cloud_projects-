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
   git clone https://github.com/Obson95/Cloud_Projects-.git
   
   cd <repository-directory>


2. **Command used during the process:**

   # Initialize Terraform
    terraform init 

   ![terraform init](https://github.com/Obson95/cloud_projects-/assets/109316664/7a6b2b25-bcf2-4ab3-b1e6-2da3fc88e1ed)


   # Plan the Deployment
    terraform plan

    ![terraform plan](https://github.com/Obson95/cloud_projects-/assets/109316664/cfd1eb34-2cfb-4ef3-bc6a-b8d83ff7d496)


   # Apply the Configuration
    terraform apply

    ![terraform apply](https://github.com/Obson95/cloud_projects-/assets/109316664/5d8738d6-dbad-4e2b-b350-da716f276286)


3. **Proof of the resource group created in azure portal**

![azure proof](https://github.com/Obson95/cloud_projects-/assets/109316664/bb11ce24-85d1-4bee-86f2-b4525af170db)


