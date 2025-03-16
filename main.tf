 terraform {
       backend "remote" {
         # The name of your Terraform Cloud organization.
         organization = "oaa_dons"

         # The name of the Terraform Cloud workspace to store Terraform state files in.
         workspaces {
           name = "node-countries"
         }
       }
     }

     # An example resource that does nothing.
     resource "null_resource" "example" {
       triggers = {
         value = "A example resource that does nothing!"
       }
     }
