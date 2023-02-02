포트폴리용 Next.js 웹사이트

## 시작하기

개발 서버 시작하기 :

```배쉬 쉘
npm run dev
# or
yarn dev
# or
pnpm dev
```

http://localhost:3000을 웹 브라우저 url에 입력후 표시되는 페이지를 확인하세요.

프로젝트의 `pages/index.tsx`.파일을 편집하면 웹사이트에 표시되는 페이지가 자동으로 수정됩니다.

[API routes](https://nextjs.org/docs/api-routes/introduction)는 [http://localhost:3000/api/hello](http://localhost:3000/api/hello)에서 접근할 수 있습니다. 이 엔드 포인트는 `pages/api/hello.ts`에서 편집할 수 있습니다.

`pages/api` 폴더안에 있는 모든 파일는`/api/*`로 매핑됩니다. 디렉토리 안에 있는 파일들은 React Pages가 아닌 [API routes](https://nextjs.org/docs/api-routes/introduction)로 취급됩니다.

이 프로젝트는 [`next/font`](https://nextjs.org/docs/basic-features/font-optimization)를 사용하여 커스텀 구글 폰트인 Inter를 자동으로 최적화하고 로드합니다.

## 더 공부하기

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
