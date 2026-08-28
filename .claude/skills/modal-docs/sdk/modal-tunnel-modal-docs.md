# modal.Tunnel | Modal Docs

- **URL:** https://modal.com/docs/sdk/py/latest/modal.Tunnel
- **Summary:** A port forwarded from within a running Modal container. Created by modal.forward().

Copy page

modal.Tunnel
============

    class Tunnel(object)

A port forwarded from within a running Modal container. Created by `modal.forward()`.

**Important:** This is an experimental API which may change in the future.

    __init__(self, host, port, unencrypted_host, unencrypted_port)

url 

    url(self)

Get the public HTTPS URL of the forwarded port.

tls_socket 

    tls_socket(self)

Get the public TLS socket as a (host, port) tuple.

tcp_socket 

    tcp_socket(self)

Get the public TCP socket as a (host, port) tuple.

[modal.Tunnel](https://modal.com/docs/sdk/py/latest/modal.Tunnel#modaltunnel)
[url](https://modal.com/docs/sdk/py/latest/modal.Tunnel#url)
[tls_socket](https://modal.com/docs/sdk/py/latest/modal.Tunnel#tls_socket)
[tcp_socket](https://modal.com/docs/sdk/py/latest/modal.Tunnel#tcp_socket)
