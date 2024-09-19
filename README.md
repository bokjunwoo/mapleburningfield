# 버닝필드

이 프로젝트는 넥슨 OPEN API를 이용한 상용 웹사이트 입니다.
![스크린샷 2024-09-19 133158](https://github.com/user-attachments/assets/d1889caf-3086-4c51-9333-c357ec53a3fd)


사이트 주소: https://mapleburningfield.com/

넥슨 파트너스: https://partners.maplestory.nexon.com/developers

넥슨 OPEN API: https://openapi.nexon.com/ko/

## 프로젝트 소개

해당 서비스는 인기 사냥터를 비교하여 최적의 사냥터를 빠르게 찾을 수 있도록 돕습니다. 
또한, 이벤트 사냥 스킬에 따른 경험치 정보, VIP 부스터 정보, 폴로 프리토 정보를 확인할 수 있습니다.
메할일 서비스는 일일퀘스트. 주간퀘스트의 경험치 획득 효율을 분석하여 최적의 메할일을 추천합니다.

이 서비스의 주요 기능은 다음과 같습니다

  - 캐릭터 정보를 바탕으로 경험치 획득량, 아이템 드랍률, 메소 획득량 등의 정보를 가져와 활용할 수 있습니다. 
    (API 점검이나 메이플스토리 점검 시에는 직접 정보를 입력하여 사용할 수 있습니다.)
  - 사냥터의 맵 정보와 몬스터 정보를 확인할 수 있습니다.
  - 이벤트 사냥 스킬, VIP 부스터, 그리고 폴로 프리토의 경험치 증가 정보를 제공합니다.
  - 캐릭터 정보를 바탕으로 메할일(일퀘, 주간퀘, 몬스터파크, 에픽던전 등)의 경험치 획득량을 확인할 수 있습니다.

## 기술스택

  - **Next.js 14 (App Router)**: 최신 Next.js를 사용하여 SEO와 성능을 최적화하고, 유연한 라우팅 기능으로 페이지 관리를 효율적으로 처리하기 위해 선택했습니다.
  
  - **Recoil**: 전역 상태 관리를 쉽게 하고, 복잡한 상태 로직을 간편하게 처리하기 위해 선택했습니다.
  
  - **React Query**: 데이터 fetching과 캐싱을 효율적으로 처리하여, OPEN API 요청 빈도 수를 줄이기 위해 선택했습니다.
  
  - **Axios**: HTTP 요청을 간편하게 관리하고, 요청 및 응답을 유연하게 제어하기 위해 선택했습니다.
  
  - **MUI (Material-UI)**: 일관된 디자인과 사용자 경험을 제공하고, 빠른 UI 개발을 위해 선택했습니다.

## 폴더구조
```bash
|-- /src
    |-- (beforeUser)        # 사용자 관련 선행 작업 처리
    |-- /Page               # 페이지 관련 파일(loading, error 페이지 설정)
    |-- /RQProvider         # React Query Provider 설정
    |-- /_component         # 재사용 가능한 컴포넌트 모음
    |-- /api/Service        # API 서비스와 React Query 연동
    |-- /atoms              # Recoil 상태 관리 (atoms)
    |-- /constants          # 상수 값 정의
    |-- /data               # 메이플 지도 데이터
    |-- /hooks              # 커스텀 훅
    |-- /interface          # 공통 타입 정의
    |-- /utils              # 유틸리티 함수
    |-- ClientRoot.tsx      # 클라이언트 사이드 루트 설정
    |-- globals.css         # 글로벌 CSS 설정
    |-- layout.tsx          # 루트 레이아웃 컴포넌트
    |-- not-found.tsx       # 404 페이지 설정
    |-- page.tsx            # 루트 페이지 설정
    |-- theme.ts            # MUI 테마 관련 설정
|-- /public                 # 정적 파일
```

## 디자인 패턴: Container/Presentational Pattern / 커스텀 훅
Container/Presentational Pattern과 커스텀 훅을 번갈아 사용한 기준

1. **Container/Presentational Pattern**
   - UI와 비즈니스 로직을 명확히 분리하여 **각각의 역할을 명확히 구분**할 필요가 있는 경우.
   - **상태 관리** 또는 **비즈니스 로직**이 다수 포함되어 있을 때 Container 컴포넌트에서 해당 로직을 처리하고, Presentational 컴포넌트는 순수하게 UI만 담당.
   - 주로 **상태 관리**(Recoil)나 **로직 처리**가 필요한 컴포넌트에서 이 패턴을 사용.
      <details>
      <summary>코드</summary> 
    
      ```typescript
        // Container 컴포넌트: 비즈니스 로직 처리 및 상태 관리
        const RegionChip = ({ region }: Props) => {
          const characterLevel = useRecoilValue(characterLevelState);
          const isSelected = useRecoilValue(isAreaIncludedSelector(region));
          const setRegionList = useSetRecoilState(regionListState);
        
          const toggleSelectedValue = () => {
            setRegionList((prev) => {
              if (isSelected) {
                return prev.filter((value) => value !== region);
              }
              return [...prev, region];
            });
          };
        
          const isAccessible = isAreaAccessible(region, characterLevel);
        
          return (
            <RegionChipUI
              value={region}
              isSelected={isSelected}
              onToggle={toggleSelectedValue}
              isAccessible={isAccessible}
            />
          );
        };
        
        // Presentational 컴포넌트: 순수한 UI 렌더링
        const RegionChipUI = ({ value, isSelected, onToggle, isAccessible }: Props) => {
          const { bgcolor } = REGION_COLOR[value];
        
          return (
            <Chip
              onClick={onToggle}
              disabled={!isAccessible}
              // 스타일 및 UI 처리
              sx={{
                outline: isSelected ? '1px solid #3366FF' : 'none',
                color: isSelected ? '#3366FF' : grey[900],
                bgcolor,
              }}
              avatar={
                <Avatar
                  src={`/images/region_icon/${value}.png`}
                  alt={`${value}_맵`}
                />
              }
              label={value}
            />
          );
        };
      ```
      </details>

2. **커스텀 훅**
   - **반복적인 비즈니스 로직**이나 API 호출 로직을 **재사용**해야 하는 경우.
   - 한 컴포넌트에서만 사용하는 것이 아닌, 여러 컴포넌트에서 동일한 로직을 공유할 때.
     <details>
      <summary>코드</summary> 
      
       ```typescript
        // UI 컴포넌트: 훅에서 제공된 상태와 핸들러로 UI 렌더링
        const HeaderSearchFormUI = ({ pathName }: Props) => {
          const {
            value,
            onChange,
            alert,
            isLoading,
            handleAlertClose,
            handleSubmit,
            handleClick,
          } = useCharacterSearch(pathName); // 커스텀 훅: 검색 로직을 처리하고 다른 컴포넌트에서 재사용 가능
        
          return (
            <Box
              component="form"
              onSubmit={handleSubmit}
            >
              <InputBase
                value={value}
                onChange={onChange}
                placeholder="캐릭터 검색"
              />
              {isLoading ? (
                <CircularProgress size={24} />
              ) : (
                <IconButton onClick={handleClick}>
                  <SearchIcon />
                </IconButton>
              )}
              <AlertUI alert={alert} handleClose={handleAlertClose} />
            </Box>
          );
       ```
     </details>
 

## 타입스크립트 작성 규칙

1. 컴포넌트 Props 타입 정의:
  - 모든 컴포넌트는 type Props = {} 형식을 사용하여 Props 타입을 정의하고, 필요시 제네릭 타입을 사용합니다.
  - EX)
    ```typescript
      // Button.tsx
      type Props = {
        label: string;
        onClick: () => void;
      };
          
      const Button = ({ label, onClick }: Props) => (
        <button onClick={onClick}>{label}</button>
      );
      
      export default Button;
      ```
    
2. 공통 타입 및 API 타입 정의 
  - 공통적으로 사용되는 타입들은 /interface 폴더에 저장합니다.
  - API 요청 및 응답에 대한 타입을 명확하게 정의하여 /interface/api 폴더에 저장합니다. (넥슨 OPEN API)
  - 타입은 interface를 사용해 정의하며, 특정 경우 type을 사용합니다.
  - EX)
    ```typescript
    // /interface/api/character.d.ts
  
    interface CharacterInfoBase {
      date: string;
      character_name: string;
      world_name: string;
      character_gender: string;
      character_class: CharacterClass;
      character_class_level: string;
      character_level: number;
      character_exp: number;
      character_exp_rate: string;
      character_guild_name: string;
      character_image: string;
      character_date_create: string;
      access_flag: string;
      liberation_quest_clear_flag: string;
    }
    ```

## 상태 관리 (Recoil)
Recoil을 사용해 전역 상태를 관리합니다. 상태는 /atoms 폴더 내에서 관리하며, 각 상태는 Atom으로 정의되고, Selector를 통해 파생된 상태를 관리할 수 있습니다.

-  Recoil Atom: 각 전역 상태는 atom으로 정의되며, 고유한 key를 사용해 Recoil 상태 트리에서 관리됩니다.
-  Recoil Selector: 파생 상태를 관리할 때는 selector를 사용해 다른 Atom 상태를 참조하거나 전역 상태에 기반한 파생 데이터를 쉽게 계산할 수 있습니다.
-  selectorFamily: 인자로 받은 값(  )을 기반으로, Atom에서 특정 데이터를 찾아 그 값을 가공합니다. 이 방식을 통해 동적인 파생 상태를 가져옵니다.
-  EX)
    ```typescript
    export const expRateState = atom<SelectItem[]>({
      key: 'expRateState',
      default: [],
    });
    
    export const expRateSelector = selectorFamily({
      key: 'expRateSelector',
      get:
        (rateName: string) =>
        ({ get }) => {
          const data = get(expRateState);
          const selectedRate = data.find((rate) => rate.label === rateName);
          return selectedRate ? selectedRate.value.toLocaleString() : '';
        },
    });
    
    export const totalExpRateSelector = selector({
      key: 'totalExpRateSelector',
      get: ({ get }) => {
        const rates = get(expRateState);
        return rates.reduce((total, rate) => total + rate.value, 100);
      },
    });
    ```

## API 요청 처리 (React Query)
`Service` 클래스는 API 요청을 처리하는 기본 베이스 클래스입니다. 이 클래스는 Axios 인스턴스를 생성하고, 이를 통해 각종 API 요청을 보냅니다. 추가적인 API 서비스 클래스는 이 `Service` 클래스를 확장하여 구현됩니다.
<details>
  <summary>코드</summary> 
  
  ```typescript
    import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
    
    interface HTTPInstance {
      get<T>(url: string, config?: AxiosRequestConfig): Promise<T>;
    }
    
    class Service {
      public http: HTTPInstance;
    
      private baseURL: string;
    
      private headers: Record<string, string>;
    
      constructor() {
        // 환경 변수로부터 API URL 및 API Key 설정
        this.baseURL = `${process.env.NEXT_PUBLIC_MAPLE_OPEN_API_URL}`;
        this.headers = {
          'Content-Type': 'application/json',
          'x-nxopen-api-key': process.env.NEXT_PUBLIC_MAPLE_OPEN_API_KEY || '',
        };
    
        this.http = {
          get: this.get.bind(this), // GET 요청 메서드 바인딩
        };
      }
    
      // Axios 인스턴스 생성 함수
      private createAxiosInstance() {
        return axios.create({
          baseURL: this.baseURL,
          headers: this.headers,
        });
      }
    
      // GET 요청 처리 메서드
      private async get<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
        try {
          const instance = this.createAxiosInstance(); // Axios 인스턴스 생성
          const response: AxiosResponse<T> = await instance.get(url, config); // API 요청
          return response.data;
        } catch (error) {
          if (axios.isAxiosError(error) && error.response) {
            // Axios 에러 처리
            throw error;
          } else {
            // 기타 에러 처리
            throw error;
          }
        }
      }
    }
    
    export default Service;
  ```
</details>

useCharacterData 훅에서 정의한 fetchCharacterData를 사용하여 React Query를 통해 캐릭터 데이터를 비동기적으로 요청하고 캐싱합니다.
```typescript
  import { useQuery } from 'react-query';
  import useCharacterData from './hooks/useCharacterData';
  
  const { fetchCharacterData } = useCharacterData(characterName);
  
  const { isLoading, error } = useQuery({
    queryKey: ['character', characterName],
    queryFn: fetchCharacterData,
    staleTime: 1000 * 60 * 5, // 5분 동안 캐싱
  });
```


## 코드 스타일 규칙
1. 폴더 및 파일 네이밍 규칙
    - 파일 이름은 카멜 케이스를 사용합니다. 예: userService.ts, useFetchUser.ts
    - 컴포넌트 파일은 PascalCase를 사용합니다. 예: UserProfile.tsx
    - 상수, 인터페이스 등은 단일 책임 원칙에 따라 파일을 분리합니다.

2. Lint와 Formatter:
    - ESLint와 Prettier를 사용해 코드 스타일을 일관되게 유지합니다.

3. 커밋 메시지 컨벤션:

    커밋 메시지는 아래와 같은 패턴을 따릅니다
    
    - `feat`: 새로운 기능 추가
    - `fix`: 버그 수정
    - `refactor`: 코드 리팩토링 (기능 변화 없음)
    - `style`: 코드 포맷팅, 세미콜론 누락 등
    - `design`: 디자인 변경
