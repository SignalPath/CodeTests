# SignalPath, LLC.
## DevOps Code Assessment
The engineering team needs a place to store and access feature flags. The team has decided they want to prototype using Consul's key/value store running inside of Kubernetes. Right now they want to prototype and test this locally, but in the future they want to move this into production so that Product Owners can enable/disable features as necessary.

1. Describe the best way to setup Kubernetes and a development Consul server for local testing.
1. Using automation, do what you described above.
1. When this service/Consul are ready to be moved into production, what steps do you plan on taking to ensure that Consul is secure and that the Product Owners have access to enable/disable feature flags?
1. What further steps would you take to ensure Consul is healthy and monitored?

Notes:
1. You can use your choice of Kubernetes provisioners to create a local cluster. Popular options include Minikube and K3s.
1. You can use the official Consul Helm chart to install Consul into Kubernetes: https://github.com/hashicorp/consul-helm
1. We use Terraform which offers providers for Kubernetes, Helm, and Consul.
