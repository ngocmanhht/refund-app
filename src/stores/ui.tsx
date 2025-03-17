import { action, computed, makeObservable, observable } from "mobx";
import { ReactNode } from "react";
import { Notification } from "@mantine/core";
import { IconX } from "@tabler/icons-react";
class UIStore {
  @observable isLoading = false;
  @observable alert: {
    content: ReactNode;
  } = {
    content: null,
  };

  @action showLoading = () => {
    this.isLoading = true;
  };
  constructor() {
    makeObservable(this);
  }
  @action hideLoading = () => {
    this.isLoading = false;
  };
  @computed get loading() {
    return this.isLoading;
  }

  @action showAlert = (title: string, message: string) => {
    this.alert = {
      content: (
        <Notification icon={<IconX size={20} />} color="red" title={title}>
          {message}
        </Notification>
      ),
    };
  };
  @computed get getNotification() {
    return this.alert.content;
  }
}

export const uiStore = new UIStore();
