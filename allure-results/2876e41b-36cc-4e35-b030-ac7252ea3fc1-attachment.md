# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: calsoft.spec.js >> calsoft new ab detail page
- Location: tests\calsoft.spec.js:3:5

# Error details

```
Test timeout of 30000ms exceeded.
```

# Page snapshot

```yaml
- generic [ref=e7]:
  - generic [ref=e9]:
    - generic [ref=e10]:
      - generic [ref=e11]: ✦ FLOWZO BUSINESS PLATFORM
      - generic [ref=e12]:
        - generic [ref=e13]: Create Your
        - generic [ref=e14]:
          - generic [ref=e15]: Flowzo Account
          - text: Today
      - generic [ref=e16]:
        - text: New user? Join thousands of businesses scaling with our unified
        - text: CRM, Calls, WhatsApp, and Ecommerce platform.
    - img "Flowzo Orbit System" [ref=e18]
    - generic [ref=e19]:
      - button "Contact Us" [ref=e20] [cursor=pointer]:
        - img [ref=e21]: phone
        - generic [ref=e22]: Contact Us
      - button "Privacy Policy" [ref=e23] [cursor=pointer]:
        - img [ref=e24]: lock
        - generic [ref=e25]: Privacy Policy
  - generic [ref=e27]:
    - img "Flowzo" [ref=e29]
    - generic [ref=e30]: Welcome back
    - generic [ref=e31]: Sign in to access your Flowzo admin dashboard
    - generic [ref=e32]:
      - generic [ref=e35]:
        - img [ref=e37]: person_outline
        - generic [ref=e38]:
          - textbox "Email or Username or PhoneNumber" [active] [ref=e39]:
            - /placeholder: Enter your email or username
          - generic:
            - generic: Email or Username or PhoneNumber *
      - generic [ref=e42]:
        - img [ref=e44]: lock_outline
        - generic [ref=e45]:
          - textbox "Password" [ref=e46]:
            - /placeholder: Enter your password
          - generic:
            - generic: Password *
        - button [ref=e48] [cursor=pointer]:
          - img [ref=e50]:
            - img [ref=e51]
      - button "Sign In" [ref=e54] [cursor=pointer]:
        - generic [ref=e55]: Sign in to Dashboard →
      - button "Forgot Password?" [ref=e57] [cursor=pointer]: Forgot Password?
      - generic [ref=e59]: or continue with
      - generic [ref=e62]:
        - button "Sign in with Google. Opens in new tab" [ref=e64] [cursor=pointer]:
          - generic [ref=e66]:
            - img [ref=e68]
            - generic [ref=e75]: Sign in with Google
        - generic:
          - iframe
          - button "Sign in with Google. Opens in new tab"
      - button "Sign in with Company Account" [ref=e76] [cursor=pointer]: Sign in with Company Account
    - generic [ref=e77]:
      - text: New user?
      - link "Create an account" [ref=e78] [cursor=pointer]:
        - /url: /register
    - generic [ref=e79]: © 2026 Flowzo ai. All rights reserved.
```