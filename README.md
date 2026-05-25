# Freastar Website

A modern, SEO-optimized static website for Freastar - digital platforms for schools, caterers and communities.

## Setup Instructions

### 1. Logo Implementation

The website is designed to use the Freastar logo image. To implement the logo:

1. **Save your logo image** as `logo.png` in the root directory
   - Recommended size: 120px height (will be scaled to 40px for navigation)
   - Format: PNG or SVG recommended
   - The logo should be the gradient star design with wings

2. **Alternative formats** you can use:
   - `logo.svg` - Best for scalability and file size
   - `logo.png` - Good for gradient designs
   - `logo.webp` - Modern format for better compression

3. **Update the HTML** if using a different filename:
   ```html
   <img src="your-logo-filename.png" alt="Freastar" class="nav__logo-image">
   ```

### 2. Current Fallback

Currently, the website shows a text-based "Freastar" logo with a simple star icon as a fallback since no logo image is present. Once you add the logo image, it will automatically display.

### 3. File Structure

```
freastar.com/
├── index.html              # Homepage
├── products.html           # Products overview
├── freastar-meals.html     # Main product page
├── healthylunch.html       # HealthyLunch.ie page
├── schoolpledge.html       # SchoolPledge.ie page
├── about.html              # Company story
├── contact.html            # Contact information
├── styles.css              # Complete responsive CSS
├── script.js               # Mobile navigation JS
├── robots.txt              # SEO crawling instructions
├── sitemap.xml             # Search engine sitemap
└── logo.png               # Your logo (to be added)
```

## Features

### Design
- Modern, professional SaaS-style design
- Responsive mobile-first layout
- Clean typography with system fonts
- Blue primary color scheme (#2563eb)
- Subtle shadows and rounded corners
- Star motif throughout

### SEO Optimization
- Unique titles and meta descriptions for all pages
- JSON-LD structured data for Organization and SoftwareApplication
- Open Graph and Twitter Card meta tags
- Semantic HTML with proper heading hierarchy
- Sitemap.xml and robots.txt

### Performance
- Single CSS file with custom properties
- Minimal JavaScript (mobile navigation only)
- No external dependencies
- Optimized for fast loading
- Progressive enhancement approach

### Accessibility
- WCAG-compliant color contrast
- Proper ARIA labels and attributes
- Keyboard navigation support
- Screen reader friendly
- Focus management

## Content Strategy

### Key Messaging
- Emphasizes supporting local caterers serving local schools
- Practical, grounded copy avoiding corporate jargon
- Focus on real-world workflows and operational benefits
- Irish context with community focus

### SEO Targets
- "school meal ordering software"
- "school lunch ordering system"  
- "catering software for schools"
- "school meals app Ireland"
- "lunch ordering app for schools"

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Android Chrome)
- Works without JavaScript (except mobile menu)
- Responsive design for all screen sizes

## Next Steps

1. **Add your logo image** to the root directory
2. **Test the website** by opening index.html in a browser
3. **Customize content** as needed for your specific requirements
4. **Deploy** to your web hosting service
5. **Set up analytics** and monitoring as needed

## Contact

For questions about the website implementation, contact the development team.