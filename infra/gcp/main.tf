# Main GCP Terraform config

terraform {
  required_providers {
    google = {
      source  = "hashicorp/google"
      version = "3.82.0" # Lock version
    }
  }
}

provider "google" {
  project = var.project_id
  region  = var.region
  zone    = var.zone
}
