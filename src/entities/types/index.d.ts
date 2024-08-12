import { rootReducer } from "store/Root.reducer";

declare global {
  type IRootState = ReturnType<typeof rootReducer>;
}
