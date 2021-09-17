# Input variables for TF config

# Google Cloud Platform Project Settings

variable "project_id" {
  type        = string
  description = "GCP Project ID"
  default     = "project-id"
}

variable "region" {
  type        = string
  description = "GCP Project Region"
  default     = "australia-southeast1"
}

variable "zone" {
  type        = string
  description = "GCP Project Zone"
  default     = "australia-southeast1-a"
}
