# interfaces-ds

An refined component registry built on top of [shadcn/ui](https://ui.shadcn.com), refined for precision and consistency.

## Usage

Add the registry to your `components.json`:

```json
{
  "registries": {
    "@interfaces-ds": "https://interfacesds.com/r/{name}.json"
  }
}
```

Then add components:

```bash
npx shadcn@latest add @interfaces-ds/button
```

## License

MIT
