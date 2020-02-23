## Create single pod
```
kubectl create -f adw-demo-pod.yaml
kubectl get pods
```

## Create multiple pods (default replicas is 3)
```
kubectl create -f adw-demo-deployment.yaml
kubectl get pods
```

## Create service for external port mapping.
```
kubectl create -f adw-demo-service.yaml
kubectl get services
```
> Endpoint: <domain or k8s IP>:30390