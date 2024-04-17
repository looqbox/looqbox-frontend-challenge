import React, { useEffect, useRef, useState } from "react";
import { useClickOutside } from "../../hooks/useClickOutside";
import { IconSearch } from "../../assets/icons/search";
import { IconClose } from "../../assets/icons/close";
import { IInput } from "./interface";
import * as css from "./style";

export const Input: React.FC<IInput> = ({ ...props }) => {
  const dropdownRef = useRef(null);
  const [dropdownOpened, setDropdownOpened] = useState(false);
  const [filteredDropdown, setFilteredDropdown] = useState(
    props.dropdown || []
  );
  const [inputValue, setInputValue] = useState(
    props.value || props.defaultValue || ""
  );

  useEffect(() => {
    setInputValue(props.value ?? "");
  }, [props.value]);

  useClickOutside(() => {
    if (dropdownOpened) setDropdownOpened(false);
  }, [dropdownRef, dropdownOpened]);

  const onInputChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    if (props.onChange) props.onChange(evt);
    else setInputValue(evt.target.value);
  };

  const onClickDropdownItem = (itemValue: string, itemLabel?: string) => {
    setInputValue(itemLabel || itemValue);
    if (props.onChange) {
      if (typeof props.onChange === "function") {
        props.onChange({
          target: { value: itemValue },
        } as React.ChangeEvent<HTMLInputElement>);
      }
    }
    setTimeout(() => {
      setDropdownOpened(false);
    }, 10);

    props.onClickDropdown && props?.onClickDropdown(itemValue);

    props.onClickDropdownItem &&
      props.onClickDropdownItem(itemValue, itemLabel);
  };

  const onFocusInput = (evt: React.FocusEvent<HTMLInputElement>) => {
    if (props.onFocus) props.onFocus(evt);

    if (!dropdownOpened) setDropdownOpened(true);
  };

  useClickOutside(() => {
    if (dropdownOpened) setDropdownOpened(false);
  }, [dropdownRef, dropdownOpened]);

  const filterDropdown = (inputValue: string) => {
    const filteredItems =
      (props.dropdown &&
        props.dropdown.filter((item) =>
          item?.label?.toLowerCase().includes(inputValue.toLowerCase())
        )) ||
      [];

    setFilteredDropdown(filteredItems);
  };

  useEffect(() => {
    setInputValue(props.value || "");
    setFilteredDropdown(props.dropdown || []);
  }, [props.value, props.dropdown]);

  useEffect(() => {
    if (inputValue !== "") {
      filterDropdown(inputValue as string);
    }
  }, [inputValue]);

  return (
    <css.Label htmlFor={props?.name} data-has-error={props?.error}>
      {/* Label */}
      {props?.label && <css.LabelText>{props.label}</css.LabelText>}

      <css.RelativeContainer>
        {/* Icon Left */}
        {props.iconLeft && (
          <div
            style={{ position: "absolute", top: "14px", left: "14px" }}
            onClick={props?.iconLeftOnClick}
          >
            <IconSearch />
          </div>
        )}

        {/* Input */}
        <css.StyledInput
          {...props}
          value={inputValue}
          data-has-error={!!props?.error}
          onChange={onInputChange}
          onFocus={onFocusInput}
          autoComplete={props.autoComplete || (props.dropdown && "off")}
          onClick={() => setDropdownOpened(true)}
        />

        {filteredDropdown.length > 0 && (
          <css.DropdownWrapper opened={dropdownOpened} ref={dropdownRef}>
            {filteredDropdown.map((dropdownItem, index) => (
              <css.DropdownItem
                className={`input-dropdown-item-${dropdownItem.value}-${index}`}
                key={`input-dropdown-item-${dropdownItem.value}-${index}`}
                onClick={() => {
                  if (props.onClickDropdown) {
                    props.onClickDropdown(dropdownItem.value);
                  }
                  if (dropdownOpened) {
                    onClickDropdownItem(dropdownItem.value, dropdownItem.label);
                  }
                }}
                active={dropdownItem.value === inputValue}
              >
                {dropdownItem.label || dropdownItem.value}
              </css.DropdownItem>
            ))}
          </css.DropdownWrapper>
        )}

        {/* Icon Right */}
        {props.iconRight && (
          <div
            style={{ position: "absolute", top: "14px", right: "14px" }}
            onClick={() => {
              if (props.iconRightOnClick) {
                props.iconRightOnClick();
                setDropdownOpened(false);
              }
            }}
          >
            <IconClose />
          </div>
        )}
      </css.RelativeContainer>

      {/* Helper text */}
      {props?.helperText && (
        <css.HelperText
          onClick={props.helperTextOnClick}
          data-has-error={props?.error}
        >
          {props.helperText}
        </css.HelperText>
      )}
    </css.Label>
  );
};
