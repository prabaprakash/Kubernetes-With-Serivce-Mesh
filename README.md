Be ready with Digitial Ocean Kubernetes with 1 master and 1 node

# 0. Installing Nginx Ingress

`$ kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/nginx-0.24.1/deploy/mandatory.yaml`

`$ kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/nginx-0.24.1/deploy/provider/cloud-generic.yaml`


# 1. Echo Web App

`$ cd 1. Echo Web app`

`$ kubectl apply  -f deployment.yaml`

`$ kubectl apply  -f service.yaml`

`$ kubectl apply  -f ingress.yaml`



