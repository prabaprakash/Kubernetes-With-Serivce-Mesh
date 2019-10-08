Be ready with Digitial Ocean Kubernetes with 1 master and 1 node

# 0. Installing Nginx Ingress

`$ kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/nginx-0.24.1/deploy/mandatory.yaml`

`$ kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/nginx-0.24.1/deploy/provider/cloud-generic.yaml`


# 1. Echo APP

`$ cd 1. Echo APP`

`$ kubectl apply  -f deployment.yaml`

`$ kubectl apply  -f service.yaml`

`$ kubectl apply  -f ingress.yaml`

# 2. Node APP

`$ cd 2. Node APP`

`$ kubectl apply  -f deployment.yaml`

`$ kubectl apply  -f service.yaml`

`$ kubectl apply  -f ingress.yaml`


`kubectl --kubeconfig="k8s-cluster-kubeconfig.yaml" get nodes`


