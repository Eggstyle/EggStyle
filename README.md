# 🥚 EggStyle - Your Van Culture Website

**Merry Christmas and Happy Birthday!** 🎄🎂

This is your personal website celebrating your Toyota Previa and Estima builds. Everything is set up and ready to go!

---

## 🌐 Your Live Website

**URL**: https://eggstyle.vercel.app/

The site automatically updates whenever you make changes to the code on GitHub. Usually takes about 2 minutes to see your changes live.

---

## 📸 How to Update Photos

### **Easiest Way - Replace Photos on GitHub:**

1. Go to: https://github.com/Prokaiwa/EggStyle
2. Click: `src` → `assets`
3. Click **"Add file"** → **"Upload files"**
4. **Important:** Rename your photos to match these exact names:
   - `hero-previa.jpg` - Main Previa photo (used on homepage and other pages)
   - `estima-showcase.jpg` - Main Estima photo (used throughout site)
   - `car-meet.jpg` - Car meet/community photo
   - `egg-logo.png` - Your egg logo (used in header and sections)
5. Drag the renamed photos into GitHub
6. Scroll down, type: "Updated photos" in the commit message
7. Click **"Commit changes"**
8. Wait 2 minutes - your site will update automatically!

**Pro Tip:** Keep photos under 2MB for fast loading. Use .jpg for photos, .png for logos.

---

## ✏️ How to Update Text Content

### **Change About Page, Blog Posts, Shop Items, etc.**

**Easiest Method - Edit Directly on GitHub:**

1. Go to: https://github.com/Prokaiwa/EggStyle
2. Navigate to the file you want to edit:
   - **About page**: `src/pages/AboutPage.tsx`
   - **Homepage**: `src/pages/HomePage.tsx`
   - **Blog posts**: `src/pages/BlogPage.tsx`
   - **Shop items**: `src/pages/ShopPage.tsx`
   - **Your rides**: `src/pages/RidesPage.tsx`
   - **How-to guides**: `src/pages/HowToPage.tsx`
3. Click the **pencil icon** (✏️) at the top right
4. Find the text you want to change - it's usually inside quotes like: `"Your text here"`
5. Make your changes
6. Scroll down, add a description like: "Updated about page"
7. Click **"Commit changes"**
8. Wait 2 minutes for the site to update!

**Example - Change Your Bio:**
- Open: `src/pages/AboutPage.tsx`
- Find the text in quotes that you want to change
- Edit it directly
- Save (commit changes)
- Done!

---

## 🛒 How to Add/Remove Shop Items

1. Go to: `src/pages/ShopPage.tsx`
2. Click the pencil icon to edit
3. Find the `products` section (around line 7)
4. **To add a new item**, copy an existing item block and paste it below, then change:
   - `id` (make it unique, like 9, 10, 11...)
   - `name` (part name)
   - `price` (price in dollars)
   - `condition` (New, Excellent, Good, etc.)
   - `compatibility` (Previa, Estima, or Both)
   - `category` (Exterior, Interior, Performance)
   - `description` (details about the part)
   - `rare` (true or false)
5. **To remove an item**, delete its entire block (from `{` to `},`)
6. Commit changes

**Example of a product:**
```javascript
{
  id: 9,
  name: "JDM Side Mirrors",
  price: 150,
  condition: "Excellent",
  compatibility: "Both",
  category: "Exterior",
  description: "Genuine JDM side mirrors with power folding.",
  rare: true,
},
```

---

## 📝 How to Add Blog Posts

1. Go to: `src/pages/BlogPage.tsx`
2. Click pencil to edit
3. Find the `blogPosts` section (around line 10)
4. Copy an existing post and paste at the top
5. Update:
   - `id` (make it unique)
   - `slug` (URL-friendly name like "my-new-post")
   - `title` (your post title)
   - `excerpt` (preview text)
   - `date` (today's date)
   - `category` (Parts, Car Meets, How-To, Story, Events)
   - `readTime` (estimate)
6. Commit changes

**Note:** Full blog post pages aren't set up yet - these just show previews. When you're ready to add full posts, ask David or use Claude for help!

---

## 🚗 How to Update Your Van Specs

**Change Previa or Estima Details:**

1. Go to: `src/pages/RidesPage.tsx`
2. Click pencil to edit
3. Find `previaSpecs` or `estimaSpecs` (around line 7 and 21)
4. Update any details:
   - Engine specs
   - Modifications list
   - Color
   - Transmission
   - Description text
5. Commit changes

---

## 🔗 How to Update Social Media Links

1. Go to: `src/components/Footer.tsx`
2. Find the Instagram link (search for "instagram.com")
3. Change `@eggstyle` to your actual Instagram handle
4. Update any other social links you want to add
5. Commit changes

**Also update on homepage:**
- Edit: `src/pages/HomePage.tsx`
- Search for "instagram.com/eggstyle"
- Update to your handle

---

## 📧 How to Update Email Addresses

Your site uses these placeholder emails:
- `shop@eggstyle.com`
- `parts@eggstyle.com`
- `guides@eggstyle.com`

**To change them:**
1. Use GitHub's search feature (click the search bar at top)
2. Search for: `@eggstyle.com`
3. It will show all files containing that email
4. Edit each file and replace with your real email
5. Commit changes

---

## 🌐 How to Add a Custom Domain (like eggstyle.com)

Right now your site is: `eggstyle.vercel.app`

**Want your own domain? Here's how:**

1. **Buy a domain** from:
   - Namecheap (recommended, ~$10/year)
   - Google Domains
   - GoDaddy
   
2. **Connect it to Vercel:**
   - Go to: https://vercel.com/dashboard
   - Click your EggStyle project
   - Click **"Settings"** → **"Domains"**
   - Click **"Add Domain"**
   - Type your domain (like `eggstyle.com`)
   - Follow Vercel's instructions to update DNS settings
   - Wait 24-48 hours for DNS to propagate
   
3. **Done!** Your site will be live at your custom domain

---

## 🤖 How to Get Help Using Claude (AI Assistant)

**Claude is your coding buddy!** Here's how to use it:

### **What Claude Can Help With:**
- ✅ Explaining what code does
- ✅ Helping you add new features
- ✅ Fixing errors
- ✅ Writing new sections for your site
- ✅ Answering "how do I..." questions

### **How to Ask Claude for Help:**

**Good Questions:**
- "How do I change the text color of the homepage title?"
- "I want to add a new page for my merchandise - how do I do that?"
- "Can you explain what this code does?" (paste the code)
- "I'm getting an error when I try to add a blog post - here's the error message..."
- "How do I make the shop items display in a different order?"

**What to Include:**
1. **Be specific** about what you want to change
2. **Share the filename** you're working on
3. **Copy/paste error messages** if something breaks
4. **Show your code** if you tried something that didn't work

**Example Conversation:**
```
You: "Hey Claude! I want to add a new car to my Rides page. I have a 1995 Honda Odyssey now. How do I add it?"

Claude: [Will give you step-by-step instructions with exact code]

You: "Thanks! One more thing - can I make it show BEFORE the Previa instead of after?"

Claude: [Will explain how to reorder them]
```

### **Tips for Working with Claude:**
- 📝 Ask one thing at a time
- 🔄 If you don't understand, ask Claude to explain differently
- 💾 Always save/commit your changes to GitHub after making edits
- ⚠️ If something breaks, tell Claude what you changed and share any error messages
- 🎯 Claude can see this README, so you can reference it: "Like it says in my README..."

---

## 💻 Advanced: Editing Code on Your Computer

**Only do this if you're comfortable with coding!**

### **Requirements:**
- Install [Node.js](https://nodejs.org) (get the LTS version)
- Install [Git](https://git-scm.com/download/win)

### **Steps:**
```bash
# 1. Clone your website to your computer
git clone https://github.com/Prokaiwa/EggStyle.git

# 2. Go into the folder
cd EggStyle

# 3. Install dependencies
npm install

# 4. Run the site locally (test changes before publishing)
npm run dev

# 5. Open your browser to: http://localhost:5173

# 6. Make changes to files, see them update live!

# 7. When you're happy with changes:
git add .
git commit -m "Describe what you changed"
git push

# 8. Your live site updates in ~2 minutes!
```

---

## 🛠️ Technologies Used

Your website is built with modern, professional tools:
- **React** - UI framework (makes interactive websites)
- **TypeScript** - Type-safe JavaScript (catches errors)
- **Vite** - Build tool (makes site fast)
- **Tailwind CSS** - Styling (makes it look good)
- **React Router** - Navigation between pages
- **Vercel** - Hosting (keeps your site online 24/7)
- **GitHub** - Code storage (backup + version control)

---

## 📂 File Structure Guide

**Where to find things:**
```
EggStyle/
├── src/
│   ├── pages/           ← All your website pages
│   │   ├── HomePage.tsx        (Main landing page)
│   │   ├── AboutPage.tsx       (Your bio/story)
│   │   ├── BlogPage.tsx        (Blog posts)
│   │   ├── GalleryPage.tsx     (Photo gallery)
│   │   ├── HowToPage.tsx       (Build guides)
│   │   ├── RidesPage.tsx       (Your vans)
│   │   └── ShopPage.tsx        (Parts for sale)
│   │
│   ├── components/      ← Reusable pieces
│   │   ├── Navigation.tsx      (Top menu)
│   │   ├── Footer.tsx          (Bottom of pages)
│   │   └── Layout.tsx          (Overall page structure)
│   │
│   ├── assets/          ← All your images
│   │   ├── hero-previa.jpg
│   │   ├── estima-showcase.jpg
│   │   ├── car-meet.jpg
│   │   └── egg-logo.png
│   │
│   └── App.tsx          ← Main app setup
│
├── public/
│   └── favicon.ico      ← Tab icon (the little egg in browser tab)
│
└── package.json         ← List of dependencies
```

---

## ⚠️ Common Issues & Fixes

### **"My changes aren't showing up!"**
- Wait 2-3 minutes after committing (Vercel takes time to deploy)
- Hard refresh your browser: `Ctrl + Shift + R` (Windows) or `Cmd + Shift + R` (Mac)
- Check Vercel dashboard to see if deployment succeeded

### **"I broke something and the site won't load!"**
- Go to your GitHub repo
- Click on **"Commits"** (near the top)
- Find your last working commit (before you broke it)
- Click **"< >"** to browse that version
- Copy the working code back
- OR: Ask David or Claude for help - they can help you fix it!

### **"I can't find where to change [something]"**
- Use GitHub's search: Click the search bar and type what you're looking for
- Ask Claude: "Where in the code do I change [thing]?"
- Look in the File Structure Guide above

### **"I want to add something completely new"**
- Ask Claude! Example: "I want to add a contact form to my site. How do I do that?"
- Claude can write the code and explain how to add it

---

## 🎁 Future Upgrades (Coming Soon!)

David is working on adding a **super easy admin panel** so you can edit everything without touching code:
- ✅ Click-and-edit interface (like WordPress)
- ✅ Upload photos with drag-and-drop
- ✅ Add blog posts with a visual editor
- ✅ Manage shop items with forms
- ✅ No coding needed!

Stay tuned - this is coming in the next update!

---

## 🙏 Credits

- **Built with love by:** David (Merry Christmas bro! 🎄)
- **Powered by:** React, Vercel, and lots of coffee ☕
- **Maintained by:** You (with Claude's help!)

---

## 📞 Need Help?

1. **First:** Ask Claude - paste your question or error message
2. **Still stuck?** Text/call David
3. **Want to learn more?** Check out these resources:
   - [React Docs](https://react.dev) - Learn React basics
   - [Tailwind CSS Docs](https://tailwindcss.com) - Learn styling
   - [GitHub Guides](https://guides.github.com) - Master Git & GitHub

---

**Remember:** You can't really break anything permanently! Everything is backed up on GitHub. If something goes wrong, just ask Claude or David for help reverting changes.

**Now go make this site yours!** 🚗🥚✨
