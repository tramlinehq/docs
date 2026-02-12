# Navigation Quick Reference

Quick reference for working with the navigation JSON files.

## 📁 File Locations

```
astro/src/content/docs/_navigation.json          # Documentation nav
astro/src/content/changelog/_navigation.json     # Changelog nav
astro/src/content/integrations/_navigation.json  # Integrations nav
```

## 📝 Schema

### Two Types Only

**Page/Document** (`type: "slug"`)
```json
{
  "label": "My Page",
  "type": "slug",
  "slug": "category/my-page"
}
```

**Category/Group** (`type: "category"`)
```json
{
  "label": "My Category",
  "type": "category",
  "children": [
    // more items here
  ]
}
```

## ✅ Rules

1. Every item MUST have `label` and `type`
2. If `type: "slug"` → MUST have `slug`
3. If `type: "category"` → MUST have `children`
4. Children are always arrays of items (slug or category)
5. Order in JSON = order in navigation
6. Slugs match file paths (without extension)

## 🚀 Common Tasks

### Add a Page to Root

```json
[
  {
    "label": "New Page",
    "type": "slug",
    "slug": "new-page"
  }
]
```

### Add a Page to Category

```json
{
  "label": "Existing Category",
  "type": "category",
  "children": [
    {
      "label": "New Page",
      "type": "slug",
      "slug": "category/new-page"
    }
  ]
}
```

### Create New Category

```json
{
  "label": "New Category",
  "type": "category",
  "children": [
    {
      "label": "First Page",
      "type": "slug",
      "slug": "new-category/first-page"
    }
  ]
}
```

### Nest Categories (Subcategory)

```json
{
  "label": "Parent Category",
  "type": "category",
  "children": [
    {
      "label": "Subcategory",
      "type": "category",
      "children": [
        {
          "label": "Page",
          "type": "slug",
          "slug": "parent/sub/page"
        }
      ]
    }
  ]
}
```

## 🔄 Reordering

Just move the item up or down in the JSON array:

```json
[
  { "label": "First", ... },
  { "label": "Second", ... },
  { "label": "Third", ... }
]
```

## ⚠️ Common Mistakes

❌ **Missing required field**
```json
{
  "label": "Page",
  "type": "slug"
  // Missing slug!
}
```

❌ **Wrong slug path**
```json
{
  "label": "My Page",
  "type": "slug",
  "slug": "/docs/my-page"  // Don't include /docs prefix!
}
```

❌ **Empty children array**
```json
{
  "label": "Category",
  "type": "category",
  "children": []  // Should have at least one child
}
```

❌ **Slug with extension**
```json
{
  "label": "My Page",
  "type": "slug",
  "slug": "my-page.mdx"  // Don't include extension!
}
```

## ✅ Correct Examples

### Docs Navigation
```json
[
  {
    "label": "Getting started",
    "type": "slug",
    "slug": "intro"
  },
  {
    "label": "Release Management",
    "type": "category",
    "children": [
      {
        "label": "New Release",
        "type": "slug",
        "slug": "using-tramline/release-management/new-release"
      }
    ]
  }
]
```

### Changelog Navigation
```json
[
  {
    "label": "December 17, 2025",
    "type": "slug",
    "slug": "december-17-2025"
  },
  {
    "label": "December 1, 2025",
    "type": "slug",
    "slug": "december-1-2025"
  }
]
```

### Integrations Navigation
```json
[
  {
    "label": "CI/CD",
    "type": "category",
    "children": [
      {
        "label": "GitHub Actions",
        "type": "slug",
        "slug": "ci-cd/github-actions"
      }
    ]
  }
]
```

## 🧪 Testing

After making changes:

```bash
cd astro
npm run build
```

Should see:
```
✓ 65 page(s) built
✓ Complete!
```

## 🔍 Validation Checklist

- [ ] Valid JSON (no trailing commas, proper quotes)
- [ ] All items have `label` and `type`
- [ ] Slugs match actual file paths
- [ ] No duplicate slugs
- [ ] Categories have at least one child
- [ ] Build succeeds
- [ ] Navigation displays correctly in browser

## 💡 Tips

1. **Use a JSON validator** - Paste into jsonlint.com before saving
2. **Match file structure** - Keep slugs aligned with actual files
3. **Meaningful labels** - Use clear, descriptive text
4. **Logical grouping** - Group related items together
5. **Consistent naming** - Use same style across all items
6. **Test locally** - Run `npm run dev` to preview changes

## 🆘 Troubleshooting

**Problem:** Navigation not showing
- Check JSON is valid (no syntax errors)
- Verify file is named `_navigation.json`
- Ensure file is in correct content folder

**Problem:** Links don't work
- Verify slug matches actual file path
- Remove any leading slashes from slugs
- Don't include file extensions in slugs

**Problem:** Build fails
- Validate JSON syntax
- Check for missing required fields
- Look for typos in property names

**Problem:** Wrong order
- Items render in array order
- Move items up/down in JSON to reorder