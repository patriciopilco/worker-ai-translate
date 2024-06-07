## Crear proyecto
```
npm create cloudflare@latest
cd workers-ai-NAME
```
Agregar al final en el archivo wrangler.toml
```
[ai]
binding = "AI" #available in your worker via env.AI
```

## Ejecutar modelo en red GPU de Cloudflare
```
npx wrangler dev --remote
```

## Deploy Worker para que sea visible desde el internet
```
npx wrangler deploy
```

