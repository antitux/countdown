FROM nginx
RUN rm -rf /usr/share/nginx/html
COPY --chown=nginx:nginx site /usr/share/nginx/html