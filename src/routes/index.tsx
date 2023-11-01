import { Outlet, createBrowserRouter } from 'react-router-dom'
import Header from '@/components/common/header/Header'
import NavigationBar from '@/components/common/navigationbar/NavigationBar'
import ErrorPage from '@/pages/ErrorPage'
import HomePage from '@/pages/home/HomePage'

export const router = createBrowserRouter(
  [
    {
      path: '/',
      element: (
        <div className={'w-full h-full relative'}>
          <Outlet />
        </div>
      ),
      children: [
        {
          index: true,
          element: (
            <>
              <Header headerType={'Logo'} pageTitle={'아이 정보 한눈에 보기'} />
              <HomePage />
              <NavigationBar selectIcon={'Home'} />
            </>
          ),
          errorElement: <ErrorPage />
        },
        {
          path: 'login',
          element: <p>{'login page'}</p>,
          errorElement: <ErrorPage />
        },
        {
          path: 'onboarding',
          element: <p>{'onboarding page'}</p>,
          errorElement: <ErrorPage />
        },
        {
          path: 'edit/:childId',
          element: <p>{'자식 수정 페이지'}</p>,
          errorElement: <ErrorPage />
        },
        {
          path: 'select-city',
          element: <p>{'도시 선택 페이지'}</p>,
          errorElement: <ErrorPage />
        },
        {
          path: 'map',
          element: (
            <div>
              {'맵'}
              <Outlet />
            </div>
          ),
          children: [
            {
              path: 'filter',
              element: <p>{'맵 하위 필더링 페이지'}</p>,
              errorElement: <ErrorPage />
            }
          ]
        },
        {
          path: 'schedule',
          element: <p>{'시간표 보기'}</p>,
          errorElement: <ErrorPage />
        },
        {
          path: 'academies',
          element: (
            <div>
              <h1>{'학원 리스트 보기'}</h1>
              <Outlet />
            </div>
          ),
          errorElement: <ErrorPage />,
          children: [
            {
              index: true,
              element: <p>{'학원 리스트 body'}</p>,
              errorElement: <ErrorPage />
            },
            {
              path: ':academiesId',
              element: <p>{'학원 상세보기'}</p>,
              errorElement: <ErrorPage />
            },
            {
              path: 'register',
              element: <p>{'학원 등록'}</p>,
              errorElement: <ErrorPage />
            }
          ]
        },
        {
          path: 'reports',
          element: <p>{'reports'}</p>,
          errorElement: <ErrorPage />
        },
        {
          path: 'settings',
          element: <p>{'setting page'}</p>,
          errorElement: <ErrorPage />
        },
        {
          path: 'myPages',
          element: <p>{'my page'}</p>,
          errorElement: <ErrorPage />
        }
      ]
    }
  ],
  { basename: '/' }
)