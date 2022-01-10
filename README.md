This is a [Next.js](https://nextjs.org/) project bootstrapped with
[`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the
result.

You can start editing the page by modifying `pages/index.js`. The page
auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on
[http://localhost:3000/api/hello](http://localhost:3000/api/hello). This
endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are
treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead
of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js
  features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out
[the Next.js GitHub repository](https://github.com/vercel/next.js/) - your
feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the
[Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme)
from the creators of Next.js.

Check out our
[Next.js deployment documentation](https://nextjs.org/docs/deployment) for more
details.

<br />

## A Reference of All the Icons.

## ![Tux, the Linux mascot](public/images/IconRef.png)

Be aware the I used module path alias to export these Icons So to import the
Icons use object destructuring and import from:

```jsx
import { IconName } from "@/icons/*";

export const MyComponent = () => {
  return (
    <div>
      <IconName />
    </div>
  );
};
```

## Props: {className, color}

#### **expected classNames:**

- `icon--sm`
- `icon--lg`
- `icon--xl`

#### **color names**

- `"gray-50"`: #fafcfc;
- `"gray-100"`: #eaefef;
- `"gray-200"`: #e0e5e5;
- `"gray-300"`: #abb2b2;
- `"gray-400"`: #7a8080;
- `"gray-500"`: #2f3333;
- `"gray-600"`: #0d0e0e;

- `"accent-dark"`: #67605f;
- `"accent-primary"`: #aa4d2e;
- `"accent-3"`: #bc7f7c;
- `"accent-4"`: #ddcdc5;

- `"edit"`: #3db2ff;
- `"success"`: #9df2b0;
- `"error"`: #ff3636;
- `"error"`-light: #ff5555;
- `"warning"`: #ffb900;
- `"warning"`-dark: #d69b00;

## All Icon Components

- `<SearchIcon />`
- `<PhoneIcon />`
- `<CalenderIcon />`
- `<ClockIcon />`
- `<LockIcon />`
- `<UserIcon />`
- `<EmailIcon />`
- `<ViewIcon />`
- `<MenuIcon />`
- `<FilterIcon />`
- `<SyncIcon />`
- `<DownloadIcon />`
- `<DeleteIcon />`
- `<CheckIcon />`
- `<WaitListIcon />`
- `<ImageIcon />`
- `<MessagesIcon />`
- `<ChevronRightIcon />`
- `<ChevronLeftIcon />`
- `<BackArrow />`
- `<PlusIcon />`
- `<CloseIcon />`
- `<OofIcon />`
- `<EventIcon />`
- `<LocationIcon />`
- `<BoothIcon />`
- `<HelpIcon />`
- `<CategoryIcon />`
- `<BroadcastIcon />`
- `<InvoiceIcon />`
- `<TodoListIcon />`
- ` ChatIcon />`
