<?php
namespace Fefi\CookieConsent;

class Category {
  public $id;
  public $label;
  public $description;

  /**
   * Create new cookie consent category
   *
   * @param string $label Label of category
   * @param string $description Description of category
   * @param string $id Unique identifier of category
   */
  public function __construct(string $label, string $description, string $id)
  {
    $this->label = $label;
    $this->description = $description;
    $this->id = $id;
  }

  /**
   * Return label
   *
   * @return string
   */
  public function label(): string
  {
    return $this->label;
  }

  /**
   * Return description
   *
   * @return string
   */
  public function description(): string
  {
    return $this->description;
  }

  /**
   * Return id
   *
   * @return string
   */
  public function id(): string
  {
    return $this->id;
  }

  public function toJson(): string
  {
    return json_encode($this->toArray());
  }

  public function toArray(): array
  {
    return [
      'id' => $this->id(),
      'label' => $this->label(),
      'description' => $this->description()
    ];
  }
}