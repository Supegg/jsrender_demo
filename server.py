import http.server
import socketserver

PORT = 8001

Handler = http.server.SimpleHTTPRequestHandler
'''
Failed to load module script: The server responded with a non-JavaScript MIME type of "text/plain". Strict MIME type checking is enforced for module scripts per HTML spec.
'''
Handler.extensions_map.update({
      ".js": "application/javascript",
});

httpd = socketserver.TCPServer(("", PORT), Handler)
httpd.serve_forever()
